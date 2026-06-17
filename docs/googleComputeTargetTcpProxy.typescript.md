# `googleComputeTargetTcpProxy` Submodule <a name="`googleComputeTargetTcpProxy` Submodule" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeTargetTcpProxy <a name="GoogleComputeTargetTcpProxy" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy google_compute_target_tcp_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer"></a>

```typescript
import { googleComputeTargetTcpProxy } from '@cdktn/provider-google-beta'

new googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy(scope: Construct, id: string, config: GoogleComputeTargetTcpProxyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig">GoogleComputeTargetTcpProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig">GoogleComputeTargetTcpProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetBackendService">resetBackendService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProxyBind">resetProxyBind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeTargetTcpProxyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a>

---

##### `resetBackendService` <a name="resetBackendService" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetBackendService"></a>

```typescript
public resetBackendService(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetLoadBalancingScheme"></a>

```typescript
public resetLoadBalancingScheme(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProxyBind` <a name="resetProxyBind" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProxyBind"></a>

```typescript
public resetProxyBind(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeTargetTcpProxy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isConstruct"></a>

```typescript
import { googleComputeTargetTcpProxy } from '@cdktn/provider-google-beta'

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformElement"></a>

```typescript
import { googleComputeTargetTcpProxy } from '@cdktn/provider-google-beta'

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformResource"></a>

```typescript
import { googleComputeTargetTcpProxy } from '@cdktn/provider-google-beta'

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport"></a>

```typescript
import { googleComputeTargetTcpProxy } from '@cdktn/provider-google-beta'

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeTargetTcpProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeTargetTcpProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeTargetTcpProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeTargetTcpProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyId">proxyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference">GoogleComputeTargetTcpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.backendServiceInput">backendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyBindInput">proxyBindInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.backendService">backendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyBind">proxyBind</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `proxyId`<sup>Required</sup> <a name="proxyId" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyId"></a>

```typescript
public readonly proxyId: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeTargetTcpProxyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference">GoogleComputeTargetTcpProxyTimeoutsOutputReference</a>

---

##### `backendServiceInput`<sup>Optional</sup> <a name="backendServiceInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.backendServiceInput"></a>

```typescript
public readonly backendServiceInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `proxyBindInput`<sup>Optional</sup> <a name="proxyBindInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyBindInput"></a>

```typescript
public readonly proxyBindInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeTargetTcpProxyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a>

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `proxyBind`<sup>Required</sup> <a name="proxyBind" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyBind"></a>

```typescript
public readonly proxyBind: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeTargetTcpProxyConfig <a name="GoogleComputeTargetTcpProxyConfig" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.Initializer"></a>

```typescript
import { googleComputeTargetTcpProxy } from '@cdktn/provider-google-beta'

const googleComputeTargetTcpProxyConfig: googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.backendService">backendService</a></code> | <code>string</code> | A reference to the BackendService resource. This field is optional when the loadBalancingScheme (available in beta) is set to INTERNAL_MANAGED. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#id GoogleComputeTargetTcpProxy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | Specifies the load balancer type. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#project GoogleComputeTargetTcpProxy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.proxyBind">proxyBind</a></code> | <code>boolean \| cdktn.IResolvable</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#name GoogleComputeTargetTcpProxy#name}

---

##### `backendService`<sup>Optional</sup> <a name="backendService" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

A reference to the BackendService resource. This field is optional when the loadBalancingScheme (available in beta) is set to INTERNAL_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#backend_service GoogleComputeTargetTcpProxy#backend_service}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#deletion_policy GoogleComputeTargetTcpProxy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#description GoogleComputeTargetTcpProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#id GoogleComputeTargetTcpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

Specifies the load balancer type.

A target TCP proxy created for one type
of load balancer cannot be used with another. For more information, refer
to [Summary of types of Google Cloud load balancers](https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview#summary-gclb). Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#load_balancing_scheme GoogleComputeTargetTcpProxy#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#project GoogleComputeTargetTcpProxy#project}.

---

##### `proxyBind`<sup>Optional</sup> <a name="proxyBind" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.proxyBind"></a>

```typescript
public readonly proxyBind: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#proxy_bind GoogleComputeTargetTcpProxy#proxy_bind}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#proxy_header GoogleComputeTargetTcpProxy#proxy_header}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeTargetTcpProxyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#timeouts GoogleComputeTargetTcpProxy#timeouts}

---

### GoogleComputeTargetTcpProxyTimeouts <a name="GoogleComputeTargetTcpProxyTimeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.Initializer"></a>

```typescript
import { googleComputeTargetTcpProxy } from '@cdktn/provider-google-beta'

const googleComputeTargetTcpProxyTimeouts: googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#create GoogleComputeTargetTcpProxy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#delete GoogleComputeTargetTcpProxy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#update GoogleComputeTargetTcpProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#create GoogleComputeTargetTcpProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#delete GoogleComputeTargetTcpProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_target_tcp_proxy#update GoogleComputeTargetTcpProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeTargetTcpProxyTimeoutsOutputReference <a name="GoogleComputeTargetTcpProxyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeTargetTcpProxy } from '@cdktn/provider-google-beta'

new googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeTargetTcpProxyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a>

---



