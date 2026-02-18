# `googleEdgenetworkSubnet` Submodule <a name="`googleEdgenetworkSubnet` Submodule" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgenetworkSubnet <a name="GoogleEdgenetworkSubnet" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet google_edgenetwork_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer"></a>

```typescript
import { googleEdgenetworkSubnet } from '@cdktn/provider-google-beta'

new googleEdgenetworkSubnet.GoogleEdgenetworkSubnet(scope: Construct, id: string, config: GoogleEdgenetworkSubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig">GoogleEdgenetworkSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig">GoogleEdgenetworkSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv4Cidr">resetIpv4Cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv6Cidr">resetIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleEdgenetworkSubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv4Cidr` <a name="resetIpv4Cidr" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv4Cidr"></a>

```typescript
public resetIpv4Cidr(): void
```

##### `resetIpv6Cidr` <a name="resetIpv6Cidr" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv6Cidr"></a>

```typescript
public resetIpv6Cidr(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetVlanId"></a>

```typescript
public resetVlanId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleEdgenetworkSubnet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct"></a>

```typescript
import { googleEdgenetworkSubnet } from '@cdktn/provider-google-beta'

googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement"></a>

```typescript
import { googleEdgenetworkSubnet } from '@cdktn/provider-google-beta'

googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource"></a>

```typescript
import { googleEdgenetworkSubnet } from '@cdktn/provider-google-beta'

googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport"></a>

```typescript
import { googleEdgenetworkSubnet } from '@cdktn/provider-google-beta'

googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleEdgenetworkSubnet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEdgenetworkSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEdgenetworkSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleEdgenetworkSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference">GoogleEdgenetworkSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4CidrInput">ipv4CidrInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6CidrInput">ipv6CidrInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4Cidr">ipv4Cidr</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6Cidr">ipv6Cidr</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEdgenetworkSubnetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference">GoogleEdgenetworkSubnetTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv4CidrInput`<sup>Optional</sup> <a name="ipv4CidrInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4CidrInput"></a>

```typescript
public readonly ipv4CidrInput: string[];
```

- *Type:* string[]

---

##### `ipv6CidrInput`<sup>Optional</sup> <a name="ipv6CidrInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6CidrInput"></a>

```typescript
public readonly ipv6CidrInput: string[];
```

- *Type:* string[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleEdgenetworkSubnetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a>

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv4Cidr`<sup>Required</sup> <a name="ipv4Cidr" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4Cidr"></a>

```typescript
public readonly ipv4Cidr: string[];
```

- *Type:* string[]

---

##### `ipv6Cidr`<sup>Required</sup> <a name="ipv6Cidr" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6Cidr"></a>

```typescript
public readonly ipv6Cidr: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgenetworkSubnetConfig <a name="GoogleEdgenetworkSubnetConfig" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.Initializer"></a>

```typescript
import { googleEdgenetworkSubnet } from '@cdktn/provider-google-beta'

const googleEdgenetworkSubnetConfig: googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.location">location</a></code> | <code>string</code> | The Google Cloud region to which the target Distributed Cloud Edge zone belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.network">network</a></code> | <code>string</code> | The ID of the network to which this router belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.subnetId">subnetId</a></code> | <code>string</code> | A unique ID that identifies this subnet. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.zone">zone</a></code> | <code>string</code> | The name of the target Distributed Cloud Edge zone. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#id GoogleEdgenetworkSubnet#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv4Cidr">ipv4Cidr</a></code> | <code>string[]</code> | The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv6Cidr">ipv6Cidr</a></code> | <code>string[]</code> | The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels associated with this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#project GoogleEdgenetworkSubnet#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.vlanId">vlanId</a></code> | <code>number</code> | VLAN ID for this subnetwork. If not specified, one is assigned automatically. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The Google Cloud region to which the target Distributed Cloud Edge zone belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#location GoogleEdgenetworkSubnet#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The ID of the network to which this router belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#network GoogleEdgenetworkSubnet#network}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

A unique ID that identifies this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#subnet_id GoogleEdgenetworkSubnet#subnet_id}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The name of the target Distributed Cloud Edge zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#zone GoogleEdgenetworkSubnet#zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#description GoogleEdgenetworkSubnet#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#id GoogleEdgenetworkSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4Cidr`<sup>Optional</sup> <a name="ipv4Cidr" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv4Cidr"></a>

```typescript
public readonly ipv4Cidr: string[];
```

- *Type:* string[]

The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#ipv4_cidr GoogleEdgenetworkSubnet#ipv4_cidr}

---

##### `ipv6Cidr`<sup>Optional</sup> <a name="ipv6Cidr" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv6Cidr"></a>

```typescript
public readonly ipv6Cidr: string[];
```

- *Type:* string[]

The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#ipv6_cidr GoogleEdgenetworkSubnet#ipv6_cidr}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#labels GoogleEdgenetworkSubnet#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#project GoogleEdgenetworkSubnet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEdgenetworkSubnetTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#timeouts GoogleEdgenetworkSubnet#timeouts}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

VLAN ID for this subnetwork. If not specified, one is assigned automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#vlan_id GoogleEdgenetworkSubnet#vlan_id}

---

### GoogleEdgenetworkSubnetTimeouts <a name="GoogleEdgenetworkSubnetTimeouts" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.Initializer"></a>

```typescript
import { googleEdgenetworkSubnet } from '@cdktn/provider-google-beta'

const googleEdgenetworkSubnetTimeouts: googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#create GoogleEdgenetworkSubnet#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#delete GoogleEdgenetworkSubnet#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#update GoogleEdgenetworkSubnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#create GoogleEdgenetworkSubnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#delete GoogleEdgenetworkSubnet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_edgenetwork_subnet#update GoogleEdgenetworkSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgenetworkSubnetTimeoutsOutputReference <a name="GoogleEdgenetworkSubnetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleEdgenetworkSubnet } from '@cdktn/provider-google-beta'

new googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleEdgenetworkSubnetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a>

---



