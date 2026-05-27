# `googleCloudSecurityComplianceFramework` Submodule <a name="`googleCloudSecurityComplianceFramework` Submodule" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSecurityComplianceFramework <a name="GoogleCloudSecurityComplianceFramework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework google_cloud_security_compliance_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework(scope: Construct, id: string, config: GoogleCloudSecurityComplianceFrameworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig">GoogleCloudSecurityComplianceFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig">GoogleCloudSecurityComplianceFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putCloudControlDetails">putCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetCloudControlDetails">resetCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudControlDetails` <a name="putCloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putCloudControlDetails"></a>

```typescript
public putCloudControlDetails(value: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putCloudControlDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudSecurityComplianceFrameworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a>

---

##### `resetCloudControlDetails` <a name="resetCloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetCloudControlDetails"></a>

```typescript
public resetCloudControlDetails(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isConstruct"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformElement"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformResource"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudSecurityComplianceFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudSecurityComplianceFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudSecurityComplianceFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.category">category</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cloudControlDetails">cloudControlDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.majorRevisionId">majorRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedCloudProviders">supportedCloudProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedEnforcementModes">supportedEnforcementModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedTargetResourceTypes">supportedTargetResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cloudControlDetailsInput">cloudControlDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.frameworkIdInput">frameworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.frameworkId">frameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.organization">organization</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.category"></a>

```typescript
public readonly category: string[];
```

- *Type:* string[]

---

##### `cloudControlDetails`<sup>Required</sup> <a name="cloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cloudControlDetails"></a>

```typescript
public readonly cloudControlDetails: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList</a>

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.majorRevisionId"></a>

```typescript
public readonly majorRevisionId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `supportedCloudProviders`<sup>Required</sup> <a name="supportedCloudProviders" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedCloudProviders"></a>

```typescript
public readonly supportedCloudProviders: string[];
```

- *Type:* string[]

---

##### `supportedEnforcementModes`<sup>Required</sup> <a name="supportedEnforcementModes" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedEnforcementModes"></a>

```typescript
public readonly supportedEnforcementModes: string[];
```

- *Type:* string[]

---

##### `supportedTargetResourceTypes`<sup>Required</sup> <a name="supportedTargetResourceTypes" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.supportedTargetResourceTypes"></a>

```typescript
public readonly supportedTargetResourceTypes: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `cloudControlDetailsInput`<sup>Optional</sup> <a name="cloudControlDetailsInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.cloudControlDetailsInput"></a>

```typescript
public readonly cloudControlDetailsInput: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `frameworkIdInput`<sup>Optional</sup> <a name="frameworkIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.frameworkIdInput"></a>

```typescript
public readonly frameworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudSecurityComplianceFrameworkTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFramework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSecurityComplianceFrameworkCloudControlDetails <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

const googleCloudSecurityComplianceFrameworkCloudControlDetails: googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId">majorRevisionId</a></code> | <code>string</code> | Major revision of cloudcontrol. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.name">name</a></code> | <code>string</code> | The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/cloudControls/{cloud-control}”. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]</code> | parameters block. |

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId"></a>

```typescript
public readonly majorRevisionId: string;
```

- *Type:* string

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#major_revision_id GoogleCloudSecurityComplianceFramework#major_revision_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/cloudControls/{cloud-control}”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#parameters GoogleCloudSecurityComplianceFramework#parameters}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

const googleCloudSecurityComplianceFrameworkCloudControlDetailsParameters: googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name">name</a></code> | <code>string</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue"></a>

```typescript
public readonly parameterValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#parameter_value GoogleCloudSecurityComplianceFramework#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

const googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue: googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue">numberValue</a></code> | <code>number</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue">oneofValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | oneof_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue">stringValue</a></code> | <code>string</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#bool_value GoogleCloudSecurityComplianceFramework#bool_value}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#number_value GoogleCloudSecurityComplianceFramework#number_value}

---

##### `oneofValue`<sup>Optional</sup> <a name="oneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue"></a>

```typescript
public readonly oneofValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#oneof_value GoogleCloudSecurityComplianceFramework#oneof_value}

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue"></a>

```typescript
public readonly stringListValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#string_list_value GoogleCloudSecurityComplianceFramework#string_list_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#string_value GoogleCloudSecurityComplianceFramework#string_value}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

const googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue: googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name">name</a></code> | <code>string</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue"></a>

```typescript
public readonly parameterValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#parameter_value GoogleCloudSecurityComplianceFramework#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

const googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue: googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue">numberValue</a></code> | <code>number</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue">stringValue</a></code> | <code>string</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#bool_value GoogleCloudSecurityComplianceFramework#bool_value}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#number_value GoogleCloudSecurityComplianceFramework#number_value}

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue"></a>

```typescript
public readonly stringListValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#string_list_value GoogleCloudSecurityComplianceFramework#string_list_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#string_value GoogleCloudSecurityComplianceFramework#string_value}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

const googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue: googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values">values</a></code> | <code>string[]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#values GoogleCloudSecurityComplianceFramework#values}

---

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

const googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue: googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values">values</a></code> | <code>string[]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#values GoogleCloudSecurityComplianceFramework#values}

---

### GoogleCloudSecurityComplianceFrameworkConfig <a name="GoogleCloudSecurityComplianceFrameworkConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

const googleCloudSecurityComplianceFrameworkConfig: googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.frameworkId">frameworkId</a></code> | <code>string</code> | ID of the framework. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.organization">organization</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.cloudControlDetails">cloudControlDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>[]</code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.description">description</a></code> | <code>string</code> | The description of the framework. The maximum length is 2000 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the framework. The maximum length is 200 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#id GoogleCloudSecurityComplianceFramework#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

ID of the framework.

This is not the full name of the framework.
This is the last part of the full name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#framework_id GoogleCloudSecurityComplianceFramework#framework_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#location GoogleCloudSecurityComplianceFramework#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#organization GoogleCloudSecurityComplianceFramework#organization}

---

##### `cloudControlDetails`<sup>Optional</sup> <a name="cloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.cloudControlDetails"></a>

```typescript
public readonly cloudControlDetails: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>[]

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#cloud_control_details GoogleCloudSecurityComplianceFramework#cloud_control_details}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#deletion_policy GoogleCloudSecurityComplianceFramework#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the framework. The maximum length is 2000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#description GoogleCloudSecurityComplianceFramework#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the framework. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#display_name GoogleCloudSecurityComplianceFramework#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#id GoogleCloudSecurityComplianceFramework#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudSecurityComplianceFrameworkTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#timeouts GoogleCloudSecurityComplianceFramework#timeouts}

---

### GoogleCloudSecurityComplianceFrameworkTimeouts <a name="GoogleCloudSecurityComplianceFrameworkTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

const googleCloudSecurityComplianceFrameworkTimeouts: googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#create GoogleCloudSecurityComplianceFramework#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#delete GoogleCloudSecurityComplianceFramework#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#update GoogleCloudSecurityComplianceFramework#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#create GoogleCloudSecurityComplianceFramework#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#delete GoogleCloudSecurityComplianceFramework#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#update GoogleCloudSecurityComplianceFramework#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.get"></a>

```typescript
public get(index: number): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>[]

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput">majorRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId">majorRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a>

---

##### `majorRevisionIdInput`<sup>Optional</sup> <a name="majorRevisionIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput"></a>

```typescript
public readonly majorRevisionIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId"></a>

```typescript
public readonly majorRevisionId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetails">GoogleCloudSecurityComplianceFrameworkCloudControlDetails</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get"></a>

```typescript
public get(index: number): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue">putParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterValue` <a name="putParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue"></a>

```typescript
public putParameterValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue">putParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterValue` <a name="putParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue"></a>

```typescript
public putParameterValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue">putStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringListValue` <a name="putStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue"></a>

```typescript
public putStringListValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue"></a>

```typescript
public resetNumberValue(): void
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue"></a>

```typescript
public resetStringListValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue"></a>

```typescript
public readonly stringListValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a>

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput"></a>

```typescript
public readonly numberValueInput: number;
```

- *Type:* number

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput"></a>

```typescript
public readonly stringListValueInput: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue">putOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue">putStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue">resetOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOneofValue` <a name="putOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue"></a>

```typescript
public putOneofValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `putStringListValue` <a name="putStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue"></a>

```typescript
public putStringListValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue"></a>

```typescript
public resetNumberValue(): void
```

##### `resetOneofValue` <a name="resetOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue"></a>

```typescript
public resetOneofValue(): void
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue"></a>

```typescript
public resetStringListValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue">oneofValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput">oneofValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oneofValue`<sup>Required</sup> <a name="oneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue"></a>

```typescript
public readonly oneofValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a>

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue"></a>

```typescript
public readonly stringListValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a>

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput"></a>

```typescript
public readonly numberValueInput: number;
```

- *Type:* number

---

##### `oneofValueInput`<sup>Optional</sup> <a name="oneofValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput"></a>

```typescript
public readonly oneofValueInput: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput"></a>

```typescript
public readonly stringListValueInput: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudSecurityComplianceFramework } from '@cdktn/provider-google-beta'

new googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudSecurityComplianceFrameworkTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFramework.GoogleCloudSecurityComplianceFrameworkTimeouts">GoogleCloudSecurityComplianceFrameworkTimeouts</a>

---



