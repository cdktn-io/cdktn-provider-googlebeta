# `googleMemorystoreAclPolicy` Submodule <a name="`googleMemorystoreAclPolicy` Submodule" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemorystoreAclPolicy <a name="GoogleMemorystoreAclPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy google_memorystore_acl_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

new googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy(scope: Construct, id: string, config: GoogleMemorystoreAclPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig">GoogleMemorystoreAclPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig">GoogleMemorystoreAclPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleMemorystoreAclPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMemorystoreAclPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMemorystoreAclPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleMemorystoreAclPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMemorystoreAclPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMemorystoreAclPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMemorystoreAclPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList">GoogleMemorystoreAclPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference">GoogleMemorystoreAclPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyIdInput">aclPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyId">aclPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rules"></a>

```typescript
public readonly rules: GoogleMemorystoreAclPolicyRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList">GoogleMemorystoreAclPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMemorystoreAclPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference">GoogleMemorystoreAclPolicyTimeoutsOutputReference</a>

---

##### `aclPolicyIdInput`<sup>Optional</sup> <a name="aclPolicyIdInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyIdInput"></a>

```typescript
public readonly aclPolicyIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleMemorystoreAclPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMemorystoreAclPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyId"></a>

```typescript
public readonly aclPolicyId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemorystoreAclPolicyConfig <a name="GoogleMemorystoreAclPolicyConfig" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.Initializer"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

const googleMemorystoreAclPolicyConfig: googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.aclPolicyId">aclPolicyId</a></code> | <code>string</code> | The logical name of the ACL policy in the customer project with the following restrictions:. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>[]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.aclPolicyId"></a>

```typescript
public readonly aclPolicyId: string;
```

- *Type:* string

The logical name of the ACL policy in the customer project with the following restrictions:.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the customer project / location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#acl_policy_id GoogleMemorystoreAclPolicy#acl_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#location GoogleMemorystoreAclPolicy#location}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleMemorystoreAclPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#rules GoogleMemorystoreAclPolicy#rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#deletion_policy GoogleMemorystoreAclPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMemorystoreAclPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#timeouts GoogleMemorystoreAclPolicy#timeouts}

---

### GoogleMemorystoreAclPolicyRules <a name="GoogleMemorystoreAclPolicyRules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.Initializer"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

const googleMemorystoreAclPolicyRules: googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.rule">rule</a></code> | <code>string</code> | The rule to be applied to the username. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.username">username</a></code> | <code>string</code> | Specifies the IAM user or service account to be added to the ACL policy. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

The rule to be applied to the username.

Ex: "on >password123 ~* +@all"
The format of the rule is defined by Valkey OSS:
https://valkey.io/topics/acl/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#rule GoogleMemorystoreAclPolicy#rule}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the IAM user or service account to be added to the ACL policy.

This username will be directly set on the Valkey OSS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#username GoogleMemorystoreAclPolicy#username}

---

### GoogleMemorystoreAclPolicyTimeouts <a name="GoogleMemorystoreAclPolicyTimeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.Initializer"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

const googleMemorystoreAclPolicyTimeouts: googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#create GoogleMemorystoreAclPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#delete GoogleMemorystoreAclPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#update GoogleMemorystoreAclPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#create GoogleMemorystoreAclPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#delete GoogleMemorystoreAclPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#update GoogleMemorystoreAclPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemorystoreAclPolicyRulesList <a name="GoogleMemorystoreAclPolicyRulesList" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

new googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreAclPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreAclPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>[]

---


### GoogleMemorystoreAclPolicyRulesOutputReference <a name="GoogleMemorystoreAclPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

new googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreAclPolicyRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>

---


### GoogleMemorystoreAclPolicyTimeoutsOutputReference <a name="GoogleMemorystoreAclPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreAclPolicy } from '@cdktn/provider-google-beta'

new googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreAclPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

---



