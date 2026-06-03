# `googleServiceDirectoryNamespaceIamMember` Submodule <a name="`googleServiceDirectoryNamespaceIamMember` Submodule" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceDirectoryNamespaceIamMember <a name="GoogleServiceDirectoryNamespaceIamMember" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member google_service_directory_namespace_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.Initializer"></a>

```typescript
import { googleServiceDirectoryNamespaceIamMember } from '@cdktn/provider-google-beta'

new googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember(scope: Construct, id: string, config: GoogleServiceDirectoryNamespaceIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig">GoogleServiceDirectoryNamespaceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig">GoogleServiceDirectoryNamespaceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleServiceDirectoryNamespaceIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition">GoogleServiceDirectoryNamespaceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleServiceDirectoryNamespaceIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isConstruct"></a>

```typescript
import { googleServiceDirectoryNamespaceIamMember } from '@cdktn/provider-google-beta'

googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isTerraformElement"></a>

```typescript
import { googleServiceDirectoryNamespaceIamMember } from '@cdktn/provider-google-beta'

googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isTerraformResource"></a>

```typescript
import { googleServiceDirectoryNamespaceIamMember } from '@cdktn/provider-google-beta'

googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.generateConfigForImport"></a>

```typescript
import { googleServiceDirectoryNamespaceIamMember } from '@cdktn/provider-google-beta'

googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleServiceDirectoryNamespaceIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleServiceDirectoryNamespaceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleServiceDirectoryNamespaceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleServiceDirectoryNamespaceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference">GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition">GoogleServiceDirectoryNamespaceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference">GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleServiceDirectoryNamespaceIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition">GoogleServiceDirectoryNamespaceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceDirectoryNamespaceIamMemberCondition <a name="GoogleServiceDirectoryNamespaceIamMemberCondition" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition.Initializer"></a>

```typescript
import { googleServiceDirectoryNamespaceIamMember } from '@cdktn/provider-google-beta'

const googleServiceDirectoryNamespaceIamMemberCondition: googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#expression GoogleServiceDirectoryNamespaceIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#title GoogleServiceDirectoryNamespaceIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#description GoogleServiceDirectoryNamespaceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#expression GoogleServiceDirectoryNamespaceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#title GoogleServiceDirectoryNamespaceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#description GoogleServiceDirectoryNamespaceIamMember#description}.

---

### GoogleServiceDirectoryNamespaceIamMemberConfig <a name="GoogleServiceDirectoryNamespaceIamMemberConfig" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.Initializer"></a>

```typescript
import { googleServiceDirectoryNamespaceIamMember } from '@cdktn/provider-google-beta'

const googleServiceDirectoryNamespaceIamMemberConfig: googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#member GoogleServiceDirectoryNamespaceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#name GoogleServiceDirectoryNamespaceIamMember#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#role GoogleServiceDirectoryNamespaceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition">GoogleServiceDirectoryNamespaceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#id GoogleServiceDirectoryNamespaceIamMember#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#member GoogleServiceDirectoryNamespaceIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#name GoogleServiceDirectoryNamespaceIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#role GoogleServiceDirectoryNamespaceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleServiceDirectoryNamespaceIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition">GoogleServiceDirectoryNamespaceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#condition GoogleServiceDirectoryNamespaceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_directory_namespace_iam_member#id GoogleServiceDirectoryNamespaceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference <a name="GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleServiceDirectoryNamespaceIamMember } from '@cdktn/provider-google-beta'

new googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition">GoogleServiceDirectoryNamespaceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleServiceDirectoryNamespaceIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryNamespaceIamMember.GoogleServiceDirectoryNamespaceIamMemberCondition">GoogleServiceDirectoryNamespaceIamMemberCondition</a>

---



