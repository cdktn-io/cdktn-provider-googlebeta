# `googleBinaryAuthorizationAttestorIamMember` Submodule <a name="`googleBinaryAuthorizationAttestorIamMember` Submodule" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBinaryAuthorizationAttestorIamMember <a name="GoogleBinaryAuthorizationAttestorIamMember" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member google_binary_authorization_attestor_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.Initializer"></a>

```typescript
import { googleBinaryAuthorizationAttestorIamMember } from '@cdktn/provider-google-beta'

new googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember(scope: Construct, id: string, config: GoogleBinaryAuthorizationAttestorIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig">GoogleBinaryAuthorizationAttestorIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig">GoogleBinaryAuthorizationAttestorIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleBinaryAuthorizationAttestorIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition">GoogleBinaryAuthorizationAttestorIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBinaryAuthorizationAttestorIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isConstruct"></a>

```typescript
import { googleBinaryAuthorizationAttestorIamMember } from '@cdktn/provider-google-beta'

googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isTerraformElement"></a>

```typescript
import { googleBinaryAuthorizationAttestorIamMember } from '@cdktn/provider-google-beta'

googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isTerraformResource"></a>

```typescript
import { googleBinaryAuthorizationAttestorIamMember } from '@cdktn/provider-google-beta'

googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.generateConfigForImport"></a>

```typescript
import { googleBinaryAuthorizationAttestorIamMember } from '@cdktn/provider-google-beta'

googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBinaryAuthorizationAttestorIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBinaryAuthorizationAttestorIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBinaryAuthorizationAttestorIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBinaryAuthorizationAttestorIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference">GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.attestorInput">attestorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition">GoogleBinaryAuthorizationAttestorIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.attestor">attestor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference">GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `attestorInput`<sup>Optional</sup> <a name="attestorInput" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.attestorInput"></a>

```typescript
public readonly attestorInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleBinaryAuthorizationAttestorIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition">GoogleBinaryAuthorizationAttestorIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `attestor`<sup>Required</sup> <a name="attestor" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.attestor"></a>

```typescript
public readonly attestor: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBinaryAuthorizationAttestorIamMemberCondition <a name="GoogleBinaryAuthorizationAttestorIamMemberCondition" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition.Initializer"></a>

```typescript
import { googleBinaryAuthorizationAttestorIamMember } from '@cdktn/provider-google-beta'

const googleBinaryAuthorizationAttestorIamMemberCondition: googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#expression GoogleBinaryAuthorizationAttestorIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#title GoogleBinaryAuthorizationAttestorIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#description GoogleBinaryAuthorizationAttestorIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#expression GoogleBinaryAuthorizationAttestorIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#title GoogleBinaryAuthorizationAttestorIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#description GoogleBinaryAuthorizationAttestorIamMember#description}.

---

### GoogleBinaryAuthorizationAttestorIamMemberConfig <a name="GoogleBinaryAuthorizationAttestorIamMemberConfig" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.Initializer"></a>

```typescript
import { googleBinaryAuthorizationAttestorIamMember } from '@cdktn/provider-google-beta'

const googleBinaryAuthorizationAttestorIamMemberConfig: googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.attestor">attestor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#attestor GoogleBinaryAuthorizationAttestorIamMember#attestor}. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#member GoogleBinaryAuthorizationAttestorIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#role GoogleBinaryAuthorizationAttestorIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition">GoogleBinaryAuthorizationAttestorIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#id GoogleBinaryAuthorizationAttestorIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#project GoogleBinaryAuthorizationAttestorIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attestor`<sup>Required</sup> <a name="attestor" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.attestor"></a>

```typescript
public readonly attestor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#attestor GoogleBinaryAuthorizationAttestorIamMember#attestor}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#member GoogleBinaryAuthorizationAttestorIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#role GoogleBinaryAuthorizationAttestorIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleBinaryAuthorizationAttestorIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition">GoogleBinaryAuthorizationAttestorIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#condition GoogleBinaryAuthorizationAttestorIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#id GoogleBinaryAuthorizationAttestorIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_binary_authorization_attestor_iam_member#project GoogleBinaryAuthorizationAttestorIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference <a name="GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleBinaryAuthorizationAttestorIamMember } from '@cdktn/provider-google-beta'

new googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition">GoogleBinaryAuthorizationAttestorIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBinaryAuthorizationAttestorIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBinaryAuthorizationAttestorIamMember.GoogleBinaryAuthorizationAttestorIamMemberCondition">GoogleBinaryAuthorizationAttestorIamMemberCondition</a>

---



