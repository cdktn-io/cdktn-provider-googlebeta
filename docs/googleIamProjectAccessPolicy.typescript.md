# `googleIamProjectAccessPolicy` Submodule <a name="`googleIamProjectAccessPolicy` Submodule" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamProjectAccessPolicy <a name="GoogleIamProjectAccessPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy google_iam_project_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

new googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy(scope: Construct, id: string, config: GoogleIamProjectAccessPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig">GoogleIamProjectAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig">GoogleIamProjectAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putDetails"></a>

```typescript
public putDetails(value: GoogleIamProjectAccessPolicyDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamProjectAccessPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDetails` <a name="resetDetails" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDetails"></a>

```typescript
public resetDetails(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamProjectAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleIamProjectAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamProjectAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamProjectAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamProjectAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference">GoogleIamProjectAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference">GoogleIamProjectAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyIdInput">accessPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.detailsInput">detailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.details"></a>

```typescript
public readonly details: GoogleIamProjectAccessPolicyDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference">GoogleIamProjectAccessPolicyDetailsOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamProjectAccessPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference">GoogleIamProjectAccessPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accessPolicyIdInput`<sup>Optional</sup> <a name="accessPolicyIdInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyIdInput"></a>

```typescript
public readonly accessPolicyIdInput: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.detailsInput"></a>

```typescript
public readonly detailsInput: GoogleIamProjectAccessPolicyDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamProjectAccessPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamProjectAccessPolicyConfig <a name="GoogleIamProjectAccessPolicyConfig" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

const googleIamProjectAccessPolicyConfig: googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#id GoogleIamProjectAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#project GoogleIamProjectAccessPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#access_policy_id GoogleIamProjectAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#location GoogleIamProjectAccessPolicy#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#annotations GoogleIamProjectAccessPolicy#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#deletion_policy GoogleIamProjectAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.details"></a>

```typescript
public readonly details: GoogleIamProjectAccessPolicyDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#details GoogleIamProjectAccessPolicy#details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#display_name GoogleIamProjectAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#id GoogleIamProjectAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#project GoogleIamProjectAccessPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamProjectAccessPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#timeouts GoogleIamProjectAccessPolicy#timeouts}

---

### GoogleIamProjectAccessPolicyDetails <a name="GoogleIamProjectAccessPolicyDetails" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

const googleIamProjectAccessPolicyDetails: googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleIamProjectAccessPolicyDetailsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#rules GoogleIamProjectAccessPolicy#rules}

---

### GoogleIamProjectAccessPolicyDetailsRules <a name="GoogleIamProjectAccessPolicyDetailsRules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

const googleIamProjectAccessPolicyDetailsRules: googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.effect">effect</a></code> | <code>string</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.principals">principals</a></code> | <code>string[]</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.description">description</a></code> | <code>string</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.excludedPrincipals">excludedPrincipals</a></code> | <code>string[]</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#effect GoogleIamProjectAccessPolicy#effect}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.operation"></a>

```typescript
public readonly operation: GoogleIamProjectAccessPolicyDetailsRulesOperation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#operation GoogleIamProjectAccessPolicy#operation}

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:
* 'principal://goog/subject/{email_id}': A specific Google Account.
Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
A Google Cloud service account. For example,
'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
principals associated with the specified Google Workspace or Cloud
Identity customer ID. For example,
'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
If an identifier that was previously set on a policy is soft deleted, then
calls to read that policy will return the identifier with a deleted
prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
Google Account that was deleted recently. For example,
'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
the Google Account is recovered, this identifier reverts to the standard
identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
that was deleted recently. For example,
'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
If the Google group is restored, this identifier reverts to the standard
identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
A Google Cloud service account that was deleted recently. For example,
'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
If the service account is undeleted, this identifier reverts to the
standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#principals GoogleIamProjectAccessPolicy#principals}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GoogleIamProjectAccessPolicyDetailsRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#conditions GoogleIamProjectAccessPolicy#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#description GoogleIamProjectAccessPolicy#description}

---

##### `excludedPrincipals`<sup>Optional</sup> <a name="excludedPrincipals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```typescript
public readonly excludedPrincipals: string[];
```

- *Type:* string[]

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#excluded_principals GoogleIamProjectAccessPolicy#excluded_principals}

---

### GoogleIamProjectAccessPolicyDetailsRulesConditions <a name="GoogleIamProjectAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

const googleIamProjectAccessPolicyDetailsRulesConditions: googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#service GoogleIamProjectAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#service GoogleIamProjectAccessPolicy#service}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#expression GoogleIamProjectAccessPolicy#expression}

---

### GoogleIamProjectAccessPolicyDetailsRulesOperation <a name="GoogleIamProjectAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

const googleIamProjectAccessPolicyDetailsRulesOperation: googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.permissions">permissions</a></code> | <code>string[]</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions">excludedPermissions</a></code> | <code>string[]</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:
* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#permissions GoogleIamProjectAccessPolicy#permissions}

---

##### `excludedPermissions`<sup>Optional</sup> <a name="excludedPermissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```typescript
public readonly excludedPermissions: string[];
```

- *Type:* string[]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' _and_ in 'excluded_permissions' then it will _not_ be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#excluded_permissions GoogleIamProjectAccessPolicy#excluded_permissions}

---

### GoogleIamProjectAccessPolicyTimeouts <a name="GoogleIamProjectAccessPolicyTimeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

const googleIamProjectAccessPolicyTimeouts: googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#create GoogleIamProjectAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#delete GoogleIamProjectAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#update GoogleIamProjectAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#create GoogleIamProjectAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#delete GoogleIamProjectAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#update GoogleIamProjectAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamProjectAccessPolicyDetailsOutputReference <a name="GoogleIamProjectAccessPolicyDetailsOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

new googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleIamProjectAccessPolicyDetailsRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList">GoogleIamProjectAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rules"></a>

```typescript
public readonly rules: GoogleIamProjectAccessPolicyDetailsRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList">GoogleIamProjectAccessPolicyDetailsRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleIamProjectAccessPolicyDetailsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamProjectAccessPolicyDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

---


### GoogleIamProjectAccessPolicyDetailsRulesConditionsList <a name="GoogleIamProjectAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

new googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.get"></a>

```typescript
public get(index: number): GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamProjectAccessPolicyDetailsRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]

---


### GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference <a name="GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

new googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamProjectAccessPolicyDetailsRulesConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>

---


### GoogleIamProjectAccessPolicyDetailsRulesList <a name="GoogleIamProjectAccessPolicyDetailsRulesList" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

new googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.get"></a>

```typescript
public get(index: number): GoogleIamProjectAccessPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamProjectAccessPolicyDetailsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]

---


### GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference <a name="GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

new googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">resetExcludedPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedPermissions` <a name="resetExcludedPermissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```typescript
public resetExcludedPermissions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">excludedPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">excludedPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedPermissionsInput`<sup>Optional</sup> <a name="excludedPermissionsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```typescript
public readonly excludedPermissionsInput: string[];
```

- *Type:* string[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `excludedPermissions`<sup>Required</sup> <a name="excludedPermissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```typescript
public readonly excludedPermissions: string[];
```

- *Type:* string[]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamProjectAccessPolicyDetailsRulesOperation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

---


### GoogleIamProjectAccessPolicyDetailsRulesOutputReference <a name="GoogleIamProjectAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

new googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putOperation">putOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">resetExcludedPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GoogleIamProjectAccessPolicyDetailsRulesConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]

---

##### `putOperation` <a name="putOperation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```typescript
public putOperation(value: GoogleIamProjectAccessPolicyDetailsRulesOperation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExcludedPrincipals` <a name="resetExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```typescript
public resetExcludedPrincipals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList">GoogleIamProjectAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference">GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">excludedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput">operationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">excludedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GoogleIamProjectAccessPolicyDetailsRulesConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList">GoogleIamProjectAccessPolicyDetailsRulesConditionsList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```typescript
public readonly operation: GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference">GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GoogleIamProjectAccessPolicyDetailsRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `excludedPrincipalsInput`<sup>Optional</sup> <a name="excludedPrincipalsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```typescript
public readonly excludedPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: GoogleIamProjectAccessPolicyDetailsRulesOperation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `excludedPrincipals`<sup>Required</sup> <a name="excludedPrincipals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```typescript
public readonly excludedPrincipals: string[];
```

- *Type:* string[]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamProjectAccessPolicyDetailsRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>

---


### GoogleIamProjectAccessPolicyTimeoutsOutputReference <a name="GoogleIamProjectAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamProjectAccessPolicy } from '@cdktn/provider-google-beta'

new googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamProjectAccessPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

---



