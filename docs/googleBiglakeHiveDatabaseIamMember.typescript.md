# `googleBiglakeHiveDatabaseIamMember` Submodule <a name="`googleBiglakeHiveDatabaseIamMember` Submodule" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeHiveDatabaseIamMember <a name="GoogleBiglakeHiveDatabaseIamMember" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member google_biglake_hive_database_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.Initializer"></a>

```typescript
import { googleBiglakeHiveDatabaseIamMember } from '@cdktn/provider-google-beta'

new googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember(scope: Construct, id: string, config: GoogleBiglakeHiveDatabaseIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig">GoogleBiglakeHiveDatabaseIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig">GoogleBiglakeHiveDatabaseIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleBiglakeHiveDatabaseIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition">GoogleBiglakeHiveDatabaseIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeHiveDatabaseIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isConstruct"></a>

```typescript
import { googleBiglakeHiveDatabaseIamMember } from '@cdktn/provider-google-beta'

googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isTerraformElement"></a>

```typescript
import { googleBiglakeHiveDatabaseIamMember } from '@cdktn/provider-google-beta'

googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isTerraformResource"></a>

```typescript
import { googleBiglakeHiveDatabaseIamMember } from '@cdktn/provider-google-beta'

googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.generateConfigForImport"></a>

```typescript
import { googleBiglakeHiveDatabaseIamMember } from '@cdktn/provider-google-beta'

googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBiglakeHiveDatabaseIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBiglakeHiveDatabaseIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBiglakeHiveDatabaseIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeHiveDatabaseIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference">GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition">GoogleBiglakeHiveDatabaseIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference">GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleBiglakeHiveDatabaseIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition">GoogleBiglakeHiveDatabaseIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeHiveDatabaseIamMemberCondition <a name="GoogleBiglakeHiveDatabaseIamMemberCondition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition.Initializer"></a>

```typescript
import { googleBiglakeHiveDatabaseIamMember } from '@cdktn/provider-google-beta'

const googleBiglakeHiveDatabaseIamMemberCondition: googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#expression GoogleBiglakeHiveDatabaseIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#title GoogleBiglakeHiveDatabaseIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#description GoogleBiglakeHiveDatabaseIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#expression GoogleBiglakeHiveDatabaseIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#title GoogleBiglakeHiveDatabaseIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#description GoogleBiglakeHiveDatabaseIamMember#description}.

---

### GoogleBiglakeHiveDatabaseIamMemberConfig <a name="GoogleBiglakeHiveDatabaseIamMemberConfig" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.Initializer"></a>

```typescript
import { googleBiglakeHiveDatabaseIamMember } from '@cdktn/provider-google-beta'

const googleBiglakeHiveDatabaseIamMemberConfig: googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#catalog GoogleBiglakeHiveDatabaseIamMember#catalog}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#member GoogleBiglakeHiveDatabaseIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#name GoogleBiglakeHiveDatabaseIamMember#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#role GoogleBiglakeHiveDatabaseIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition">GoogleBiglakeHiveDatabaseIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#id GoogleBiglakeHiveDatabaseIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#project GoogleBiglakeHiveDatabaseIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#catalog GoogleBiglakeHiveDatabaseIamMember#catalog}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#member GoogleBiglakeHiveDatabaseIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#name GoogleBiglakeHiveDatabaseIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#role GoogleBiglakeHiveDatabaseIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleBiglakeHiveDatabaseIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition">GoogleBiglakeHiveDatabaseIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#condition GoogleBiglakeHiveDatabaseIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#id GoogleBiglakeHiveDatabaseIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_biglake_hive_database_iam_member#project GoogleBiglakeHiveDatabaseIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference <a name="GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleBiglakeHiveDatabaseIamMember } from '@cdktn/provider-google-beta'

new googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition">GoogleBiglakeHiveDatabaseIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBiglakeHiveDatabaseIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamMember.GoogleBiglakeHiveDatabaseIamMemberCondition">GoogleBiglakeHiveDatabaseIamMemberCondition</a>

---



