# `googleDataprocMetastoreServiceIamMember` Submodule <a name="`googleDataprocMetastoreServiceIamMember` Submodule" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreServiceIamMember <a name="GoogleDataprocMetastoreServiceIamMember" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member google_dataproc_metastore_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.Initializer"></a>

```typescript
import { googleDataprocMetastoreServiceIamMember } from '@cdktn/provider-google-beta'

new googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember(scope: Construct, id: string, config: GoogleDataprocMetastoreServiceIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig">GoogleDataprocMetastoreServiceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig">GoogleDataprocMetastoreServiceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleDataprocMetastoreServiceIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition">GoogleDataprocMetastoreServiceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataprocMetastoreServiceIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isConstruct"></a>

```typescript
import { googleDataprocMetastoreServiceIamMember } from '@cdktn/provider-google-beta'

googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isTerraformElement"></a>

```typescript
import { googleDataprocMetastoreServiceIamMember } from '@cdktn/provider-google-beta'

googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isTerraformResource"></a>

```typescript
import { googleDataprocMetastoreServiceIamMember } from '@cdktn/provider-google-beta'

googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.generateConfigForImport"></a>

```typescript
import { googleDataprocMetastoreServiceIamMember } from '@cdktn/provider-google-beta'

googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDataprocMetastoreServiceIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocMetastoreServiceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocMetastoreServiceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreServiceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference">GoogleDataprocMetastoreServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition">GoogleDataprocMetastoreServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleDataprocMetastoreServiceIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference">GoogleDataprocMetastoreServiceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleDataprocMetastoreServiceIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition">GoogleDataprocMetastoreServiceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreServiceIamMemberCondition <a name="GoogleDataprocMetastoreServiceIamMemberCondition" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition.Initializer"></a>

```typescript
import { googleDataprocMetastoreServiceIamMember } from '@cdktn/provider-google-beta'

const googleDataprocMetastoreServiceIamMemberCondition: googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#expression GoogleDataprocMetastoreServiceIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#title GoogleDataprocMetastoreServiceIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#description GoogleDataprocMetastoreServiceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#expression GoogleDataprocMetastoreServiceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#title GoogleDataprocMetastoreServiceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#description GoogleDataprocMetastoreServiceIamMember#description}.

---

### GoogleDataprocMetastoreServiceIamMemberConfig <a name="GoogleDataprocMetastoreServiceIamMemberConfig" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreServiceIamMember } from '@cdktn/provider-google-beta'

const googleDataprocMetastoreServiceIamMemberConfig: googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#member GoogleDataprocMetastoreServiceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#role GoogleDataprocMetastoreServiceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#service_id GoogleDataprocMetastoreServiceIamMember#service_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition">GoogleDataprocMetastoreServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#id GoogleDataprocMetastoreServiceIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#location GoogleDataprocMetastoreServiceIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#project GoogleDataprocMetastoreServiceIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#member GoogleDataprocMetastoreServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#role GoogleDataprocMetastoreServiceIamMember#role}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#service_id GoogleDataprocMetastoreServiceIamMember#service_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleDataprocMetastoreServiceIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition">GoogleDataprocMetastoreServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#condition GoogleDataprocMetastoreServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#id GoogleDataprocMetastoreServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#location GoogleDataprocMetastoreServiceIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dataproc_metastore_service_iam_member#project GoogleDataprocMetastoreServiceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreServiceIamMemberConditionOutputReference <a name="GoogleDataprocMetastoreServiceIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreServiceIamMember } from '@cdktn/provider-google-beta'

new googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition">GoogleDataprocMetastoreServiceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreServiceIamMember.GoogleDataprocMetastoreServiceIamMemberCondition">GoogleDataprocMetastoreServiceIamMemberCondition</a>

---



