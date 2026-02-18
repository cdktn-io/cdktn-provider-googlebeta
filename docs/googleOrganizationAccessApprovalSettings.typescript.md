# `googleOrganizationAccessApprovalSettings` Submodule <a name="`googleOrganizationAccessApprovalSettings` Submodule" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationAccessApprovalSettings <a name="GoogleOrganizationAccessApprovalSettings" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings google_organization_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

new googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings(scope: Construct, id: string, config: GoogleOrganizationAccessApprovalSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig">GoogleOrganizationAccessApprovalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig">GoogleOrganizationAccessApprovalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices">putEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetActiveKeyVersion">resetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetNotificationEmails">resetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnrolledServices` <a name="putEnrolledServices" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices"></a>

```typescript
public putEnrolledServices(value: IResolvable | GoogleOrganizationAccessApprovalSettingsEnrolledServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleOrganizationAccessApprovalSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

---

##### `resetActiveKeyVersion` <a name="resetActiveKeyVersion" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetActiveKeyVersion"></a>

```typescript
public resetActiveKeyVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotificationEmails` <a name="resetNotificationEmails" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetNotificationEmails"></a>

```typescript
public resetNotificationEmails(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOrganizationAccessApprovalSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleOrganizationAccessApprovalSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOrganizationAccessApprovalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOrganizationAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion">ancestorHasActiveKeyVersion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledAncestor">enrolledAncestor</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServices">enrolledServices</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList">GoogleOrganizationAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.invalidKeyVersion">invalidKeyVersion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference">GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersionInput">activeKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServicesInput">enrolledServicesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmailsInput">notificationEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersion">activeKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmails">notificationEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ancestorHasActiveKeyVersion`<sup>Required</sup> <a name="ancestorHasActiveKeyVersion" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```typescript
public readonly ancestorHasActiveKeyVersion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enrolledAncestor`<sup>Required</sup> <a name="enrolledAncestor" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledAncestor"></a>

```typescript
public readonly enrolledAncestor: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServices"></a>

```typescript
public readonly enrolledServices: GoogleOrganizationAccessApprovalSettingsEnrolledServicesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList">GoogleOrganizationAccessApprovalSettingsEnrolledServicesList</a>

---

##### `invalidKeyVersion`<sup>Required</sup> <a name="invalidKeyVersion" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.invalidKeyVersion"></a>

```typescript
public readonly invalidKeyVersion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference">GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `activeKeyVersionInput`<sup>Optional</sup> <a name="activeKeyVersionInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersionInput"></a>

```typescript
public readonly activeKeyVersionInput: string;
```

- *Type:* string

---

##### `enrolledServicesInput`<sup>Optional</sup> <a name="enrolledServicesInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServicesInput"></a>

```typescript
public readonly enrolledServicesInput: IResolvable | GoogleOrganizationAccessApprovalSettingsEnrolledServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notificationEmailsInput`<sup>Optional</sup> <a name="notificationEmailsInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmailsInput"></a>

```typescript
public readonly notificationEmailsInput: string[];
```

- *Type:* string[]

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleOrganizationAccessApprovalSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersion"></a>

```typescript
public readonly activeKeyVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationEmails`<sup>Required</sup> <a name="notificationEmails" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmails"></a>

```typescript
public readonly notificationEmails: string[];
```

- *Type:* string[]

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationAccessApprovalSettingsConfig <a name="GoogleOrganizationAccessApprovalSettingsConfig" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.Initializer"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

const googleOrganizationAccessApprovalSettingsConfig: googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.enrolledServices">enrolledServices</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>[]</code> | enrolled_services block. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.organizationId">organizationId</a></code> | <code>string</code> | ID of the organization of the access approval settings. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.activeKeyVersion">activeKeyVersion</a></code> | <code>string</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.notificationEmails">notificationEmails</a></code> | <code>string[]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.enrolledServices"></a>

```typescript
public readonly enrolledServices: IResolvable | GoogleOrganizationAccessApprovalSettingsEnrolledServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>[]

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#enrolled_services GoogleOrganizationAccessApprovalSettings#enrolled_services}

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

ID of the organization of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#organization_id GoogleOrganizationAccessApprovalSettings#organization_id}

---

##### `activeKeyVersion`<sup>Optional</sup> <a name="activeKeyVersion" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```typescript
public readonly activeKeyVersion: string;
```

- *Type:* string

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#active_key_version GoogleOrganizationAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationEmails`<sup>Optional</sup> <a name="notificationEmails" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.notificationEmails"></a>

```typescript
public readonly notificationEmails: string[];
```

- *Type:* string[]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#notification_emails GoogleOrganizationAccessApprovalSettings#notification_emails}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOrganizationAccessApprovalSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#timeouts GoogleOrganizationAccessApprovalSettings#timeouts}

---

### GoogleOrganizationAccessApprovalSettingsEnrolledServices <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServices" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.Initializer"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

const googleOrganizationAccessApprovalSettingsEnrolledServices: googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct">cloudProduct</a></code> | <code>string</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">enrollmentLevel</a></code> | <code>string</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```typescript
public readonly cloudProduct: string;
```

- *Type:* string

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):
  all
  appengine.googleapis.com
  bigquery.googleapis.com
  bigtable.googleapis.com
  cloudkms.googleapis.com
  compute.googleapis.com
  dataflow.googleapis.com
  iam.googleapis.com
  pubsub.googleapis.com
  storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#cloud_product GoogleOrganizationAccessApprovalSettings#cloud_product}

---

##### `enrollmentLevel`<sup>Optional</sup> <a name="enrollmentLevel" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```typescript
public readonly enrollmentLevel: string;
```

- *Type:* string

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#enrollment_level GoogleOrganizationAccessApprovalSettings#enrollment_level}

---

### GoogleOrganizationAccessApprovalSettingsTimeouts <a name="GoogleOrganizationAccessApprovalSettingsTimeouts" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.Initializer"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

const googleOrganizationAccessApprovalSettingsTimeouts: googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrganizationAccessApprovalSettingsEnrolledServicesList <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServicesList" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

new googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get"></a>

```typescript
public get(index: number): GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOrganizationAccessApprovalSettingsEnrolledServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>[]

---


### GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

new googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">resetEnrollmentLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnrollmentLevel` <a name="resetEnrollmentLevel" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```typescript
public resetEnrollmentLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">cloudProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">enrollmentLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">cloudProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">enrollmentLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProductInput`<sup>Optional</sup> <a name="cloudProductInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```typescript
public readonly cloudProductInput: string;
```

- *Type:* string

---

##### `enrollmentLevelInput`<sup>Optional</sup> <a name="enrollmentLevelInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```typescript
public readonly enrollmentLevelInput: string;
```

- *Type:* string

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```typescript
public readonly cloudProduct: string;
```

- *Type:* string

---

##### `enrollmentLevel`<sup>Required</sup> <a name="enrollmentLevel" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```typescript
public readonly enrollmentLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOrganizationAccessApprovalSettingsEnrolledServices;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>

---


### GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference <a name="GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleOrganizationAccessApprovalSettings } from '@cdktn/provider-google-beta'

new googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOrganizationAccessApprovalSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

---



