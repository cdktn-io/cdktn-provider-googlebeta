# `googleNetworkSecurityInterceptEndpointGroup` Submodule <a name="`googleNetworkSecurityInterceptEndpointGroup` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityInterceptEndpointGroup <a name="GoogleNetworkSecurityInterceptEndpointGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group google_network_security_intercept_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup(scope: Construct, id: string, config: GoogleNetworkSecurityInterceptEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig">GoogleNetworkSecurityInterceptEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig">GoogleNetworkSecurityInterceptEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityInterceptEndpointGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityInterceptEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityInterceptEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityInterceptEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityInterceptEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityInterceptEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.associations">associations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList">GoogleNetworkSecurityInterceptEndpointGroupAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.connectedDeploymentGroup">connectedDeploymentGroup</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList">GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroupInput">interceptDeploymentGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupIdInput">interceptEndpointGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroup">interceptDeploymentGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupId">interceptEndpointGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.associations"></a>

```typescript
public readonly associations: GoogleNetworkSecurityInterceptEndpointGroupAssociationsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList">GoogleNetworkSecurityInterceptEndpointGroupAssociationsList</a>

---

##### `connectedDeploymentGroup`<sup>Required</sup> <a name="connectedDeploymentGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.connectedDeploymentGroup"></a>

```typescript
public readonly connectedDeploymentGroup: GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList">GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interceptDeploymentGroupInput`<sup>Optional</sup> <a name="interceptDeploymentGroupInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroupInput"></a>

```typescript
public readonly interceptDeploymentGroupInput: string;
```

- *Type:* string

---

##### `interceptEndpointGroupIdInput`<sup>Optional</sup> <a name="interceptEndpointGroupIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupIdInput"></a>

```typescript
public readonly interceptEndpointGroupIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityInterceptEndpointGroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interceptDeploymentGroup`<sup>Required</sup> <a name="interceptDeploymentGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroup"></a>

```typescript
public readonly interceptDeploymentGroup: string;
```

- *Type:* string

---

##### `interceptEndpointGroupId`<sup>Required</sup> <a name="interceptEndpointGroupId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupId"></a>

```typescript
public readonly interceptEndpointGroupId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityInterceptEndpointGroupAssociations <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociations" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociations.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

const googleNetworkSecurityInterceptEndpointGroupAssociations: googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociations = { ... }
```


### GoogleNetworkSecurityInterceptEndpointGroupConfig <a name="GoogleNetworkSecurityInterceptEndpointGroupConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

const googleNetworkSecurityInterceptEndpointGroupConfig: googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptDeploymentGroup">interceptDeploymentGroup</a></code> | <code>string</code> | The deployment group that this endpoint group is connected to, for example: 'projects/123456789/locations/global/interceptDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptEndpointGroupId">interceptEndpointGroupId</a></code> | <code>string</code> | The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.location">location</a></code> | <code>string</code> | The cloud location of the endpoint group, currently restricted to 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.description">description</a></code> | <code>string</code> | User-provided description of the endpoint group. Used as additional context for the endpoint group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#id GoogleNetworkSecurityInterceptEndpointGroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#project GoogleNetworkSecurityInterceptEndpointGroup#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `interceptDeploymentGroup`<sup>Required</sup> <a name="interceptDeploymentGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptDeploymentGroup"></a>

```typescript
public readonly interceptDeploymentGroup: string;
```

- *Type:* string

The deployment group that this endpoint group is connected to, for example: 'projects/123456789/locations/global/interceptDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#intercept_deployment_group GoogleNetworkSecurityInterceptEndpointGroup#intercept_deployment_group}

---

##### `interceptEndpointGroupId`<sup>Required</sup> <a name="interceptEndpointGroupId" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptEndpointGroupId"></a>

```typescript
public readonly interceptEndpointGroupId: string;
```

- *Type:* string

The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#intercept_endpoint_group_id GoogleNetworkSecurityInterceptEndpointGroup#intercept_endpoint_group_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The cloud location of the endpoint group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#location GoogleNetworkSecurityInterceptEndpointGroup#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#deletion_policy GoogleNetworkSecurityInterceptEndpointGroup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description of the endpoint group. Used as additional context for the endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#description GoogleNetworkSecurityInterceptEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#id GoogleNetworkSecurityInterceptEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#labels GoogleNetworkSecurityInterceptEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#project GoogleNetworkSecurityInterceptEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityInterceptEndpointGroupTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#timeouts GoogleNetworkSecurityInterceptEndpointGroup#timeouts}

---

### GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup <a name="GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

const googleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup: googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup = { ... }
```


### GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations <a name="GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

const googleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations: googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations = { ... }
```


### GoogleNetworkSecurityInterceptEndpointGroupTimeouts <a name="GoogleNetworkSecurityInterceptEndpointGroupTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

const googleNetworkSecurityInterceptEndpointGroupTimeouts: googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#create GoogleNetworkSecurityInterceptEndpointGroup#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#delete GoogleNetworkSecurityInterceptEndpointGroup#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#update GoogleNetworkSecurityInterceptEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#create GoogleNetworkSecurityInterceptEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#delete GoogleNetworkSecurityInterceptEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_intercept_endpoint_group#update GoogleNetworkSecurityInterceptEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityInterceptEndpointGroupAssociationsList <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationsList" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociations">GoogleNetworkSecurityInterceptEndpointGroupAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecurityInterceptEndpointGroupAssociations;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupAssociations">GoogleNetworkSecurityInterceptEndpointGroupAssociations</a>

---


### GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList <a name="GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList <a name="GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference <a name="GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations">GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations">GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocations</a>

---


### GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference <a name="GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList">GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup">GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.locations"></a>

```typescript
public readonly locations: GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList">GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup">GoogleNetworkSecurityInterceptEndpointGroupConnectedDeploymentGroup</a>

---


### GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktn/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityInterceptEndpointGroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

---



