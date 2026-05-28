# `googleWorkstationsWorkstationCluster` Submodule <a name="`googleWorkstationsWorkstationCluster` Submodule" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkstationsWorkstationCluster <a name="GoogleWorkstationsWorkstationCluster" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster google_workstations_workstation_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

new googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster(scope: Construct, id: string, config: GoogleWorkstationsWorkstationClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig">GoogleWorkstationsWorkstationClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig">GoogleWorkstationsWorkstationClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putDomainConfig">putDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putPrivateClusterConfig">putPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDomainConfig">resetDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetPrivateClusterConfig">resetPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl">resetWorkstationAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetWorkstationLaunchUrl">resetWorkstationLaunchUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDomainConfig` <a name="putDomainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putDomainConfig"></a>

```typescript
public putDomainConfig(value: GoogleWorkstationsWorkstationClusterDomainConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putDomainConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

---

##### `putPrivateClusterConfig` <a name="putPrivateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putPrivateClusterConfig"></a>

```typescript
public putPrivateClusterConfig(value: GoogleWorkstationsWorkstationClusterPrivateClusterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putPrivateClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleWorkstationsWorkstationClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDomainConfig` <a name="resetDomainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDomainConfig"></a>

```typescript
public resetDomainConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPrivateClusterConfig` <a name="resetPrivateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetPrivateClusterConfig"></a>

```typescript
public resetPrivateClusterConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkstationAuthorizationUrl` <a name="resetWorkstationAuthorizationUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl"></a>

```typescript
public resetWorkstationAuthorizationUrl(): void
```

##### `resetWorkstationLaunchUrl` <a name="resetWorkstationLaunchUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetWorkstationLaunchUrl"></a>

```typescript
public resetWorkstationLaunchUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleWorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleWorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleWorkstationsWorkstationCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleWorkstationsWorkstationCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleWorkstationsWorkstationCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList">GoogleWorkstationsWorkstationClusterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.controlPlaneIp">controlPlaneIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.degraded">degraded</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfig">domainConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference">GoogleWorkstationsWorkstationClusterDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfig">privateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference">GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference">GoogleWorkstationsWorkstationClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfigInput">domainConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfigInput">privateClusterConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput">workstationAuthorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterIdInput">workstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationLaunchUrlInput">workstationLaunchUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationAuthorizationUrl">workstationAuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationLaunchUrl">workstationLaunchUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.conditions"></a>

```typescript
public readonly conditions: GoogleWorkstationsWorkstationClusterConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList">GoogleWorkstationsWorkstationClusterConditionsList</a>

---

##### `controlPlaneIp`<sup>Required</sup> <a name="controlPlaneIp" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.controlPlaneIp"></a>

```typescript
public readonly controlPlaneIp: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `degraded`<sup>Required</sup> <a name="degraded" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.degraded"></a>

```typescript
public readonly degraded: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `domainConfig`<sup>Required</sup> <a name="domainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfig"></a>

```typescript
public readonly domainConfig: GoogleWorkstationsWorkstationClusterDomainConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference">GoogleWorkstationsWorkstationClusterDomainConfigOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateClusterConfig`<sup>Required</sup> <a name="privateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfig"></a>

```typescript
public readonly privateClusterConfig: GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference">GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkstationsWorkstationClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference">GoogleWorkstationsWorkstationClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainConfigInput`<sup>Optional</sup> <a name="domainConfigInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfigInput"></a>

```typescript
public readonly domainConfigInput: GoogleWorkstationsWorkstationClusterDomainConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `privateClusterConfigInput`<sup>Optional</sup> <a name="privateClusterConfigInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfigInput"></a>

```typescript
public readonly privateClusterConfigInput: GoogleWorkstationsWorkstationClusterPrivateClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleWorkstationsWorkstationClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a>

---

##### `workstationAuthorizationUrlInput`<sup>Optional</sup> <a name="workstationAuthorizationUrlInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput"></a>

```typescript
public readonly workstationAuthorizationUrlInput: string;
```

- *Type:* string

---

##### `workstationClusterIdInput`<sup>Optional</sup> <a name="workstationClusterIdInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterIdInput"></a>

```typescript
public readonly workstationClusterIdInput: string;
```

- *Type:* string

---

##### `workstationLaunchUrlInput`<sup>Optional</sup> <a name="workstationLaunchUrlInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationLaunchUrlInput"></a>

```typescript
public readonly workstationLaunchUrlInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workstationAuthorizationUrl`<sup>Required</sup> <a name="workstationAuthorizationUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationAuthorizationUrl"></a>

```typescript
public readonly workstationAuthorizationUrl: string;
```

- *Type:* string

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

---

##### `workstationLaunchUrl`<sup>Required</sup> <a name="workstationLaunchUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationLaunchUrl"></a>

```typescript
public readonly workstationLaunchUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkstationsWorkstationClusterConditions <a name="GoogleWorkstationsWorkstationClusterConditions" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

const googleWorkstationsWorkstationClusterConditions: googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions = { ... }
```


### GoogleWorkstationsWorkstationClusterConfig <a name="GoogleWorkstationsWorkstationClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

const googleWorkstationsWorkstationClusterConfig: googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.network">network</a></code> | <code>string</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | ID to use for the workstation cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.domainConfig">domainConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a></code> | domain_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#id GoogleWorkstationsWorkstationCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.location">location</a></code> | <code>string</code> | The location where the workstation cluster should reside. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.privateClusterConfig">privateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a></code> | private_cluster_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#project GoogleWorkstationsWorkstationCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing". |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl">workstationAuthorizationUrl</a></code> | <code>string</code> | Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationLaunchUrl">workstationLaunchUrl</a></code> | <code>string</code> | Specifies the launch URL for workstations in this cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#network GoogleWorkstationsWorkstationCluster#network}

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.

Must be part of the subnetwork specified for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#subnetwork GoogleWorkstationsWorkstationCluster#subnetwork}

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

ID to use for the workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#workstation_cluster_id GoogleWorkstationsWorkstationCluster#workstation_cluster_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#annotations GoogleWorkstationsWorkstationCluster#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#deletion_policy GoogleWorkstationsWorkstationCluster#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#display_name GoogleWorkstationsWorkstationCluster#display_name}

---

##### `domainConfig`<sup>Optional</sup> <a name="domainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.domainConfig"></a>

```typescript
public readonly domainConfig: GoogleWorkstationsWorkstationClusterDomainConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#domain_config GoogleWorkstationsWorkstationCluster#domain_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#id GoogleWorkstationsWorkstationCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#labels GoogleWorkstationsWorkstationCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the workstation cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#location GoogleWorkstationsWorkstationCluster#location}

---

##### `privateClusterConfig`<sup>Optional</sup> <a name="privateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.privateClusterConfig"></a>

```typescript
public readonly privateClusterConfig: GoogleWorkstationsWorkstationClusterPrivateClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

private_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#private_cluster_config GoogleWorkstationsWorkstationCluster#private_cluster_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#project GoogleWorkstationsWorkstationCluster#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#tags GoogleWorkstationsWorkstationCluster#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkstationsWorkstationClusterTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#timeouts GoogleWorkstationsWorkstationCluster#timeouts}

---

##### `workstationAuthorizationUrl`<sup>Optional</sup> <a name="workstationAuthorizationUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl"></a>

```typescript
public readonly workstationAuthorizationUrl: string;
```

- *Type:* string

Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster.

Redirects to this endpoint will send a base64 encoded 'state' query param containing the target workstation name and original request hostname. The endpoint is responsible for retrieving a token using 'GenerateAccessToken' and redirecting back to the original hostname with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#workstation_authorization_url GoogleWorkstationsWorkstationCluster#workstation_authorization_url}

---

##### `workstationLaunchUrl`<sup>Optional</sup> <a name="workstationLaunchUrl" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationLaunchUrl"></a>

```typescript
public readonly workstationLaunchUrl: string;
```

- *Type:* string

Specifies the launch URL for workstations in this cluster.

Requests sent to unstarted workstations will be redirected to this URL.
Requests redirected to the launch endpoint will be sent with a 'workstation' query parameter containing the full workstation resource. The launch endpoint is responsible for starting the workstation, polling it until it reaches 'STATE_RUNNING', and then issuing a redirect to the workstation's host URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#workstation_launch_url GoogleWorkstationsWorkstationCluster#workstation_launch_url}

---

### GoogleWorkstationsWorkstationClusterDomainConfig <a name="GoogleWorkstationsWorkstationClusterDomainConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

const googleWorkstationsWorkstationClusterDomainConfig: googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig.property.domain">domain</a></code> | <code>string</code> | Domain used by Workstations for HTTP ingress. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain used by Workstations for HTTP ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#domain GoogleWorkstationsWorkstationCluster#domain}

---

### GoogleWorkstationsWorkstationClusterPrivateClusterConfig <a name="GoogleWorkstationsWorkstationClusterPrivateClusterConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

const googleWorkstationsWorkstationClusterPrivateClusterConfig: googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Workstations endpoint is private. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects">allowedProjects</a></code> | <code>string[]</code> | Additional project IDs that are allowed to attach to the workstation cluster's service attachment. |

---

##### `enablePrivateEndpoint`<sup>Required</sup> <a name="enablePrivateEndpoint" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint"></a>

```typescript
public readonly enablePrivateEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Workstations endpoint is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#enable_private_endpoint GoogleWorkstationsWorkstationCluster#enable_private_endpoint}

---

##### `allowedProjects`<sup>Optional</sup> <a name="allowedProjects" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects"></a>

```typescript
public readonly allowedProjects: string[];
```

- *Type:* string[]

Additional project IDs that are allowed to attach to the workstation cluster's service attachment.

By default, the workstation cluster's project and the VPC host project (if different) are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#allowed_projects GoogleWorkstationsWorkstationCluster#allowed_projects}

---

### GoogleWorkstationsWorkstationClusterTimeouts <a name="GoogleWorkstationsWorkstationClusterTimeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

const googleWorkstationsWorkstationClusterTimeouts: googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#create GoogleWorkstationsWorkstationCluster#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#delete GoogleWorkstationsWorkstationCluster#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#update GoogleWorkstationsWorkstationCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#create GoogleWorkstationsWorkstationCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#delete GoogleWorkstationsWorkstationCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workstations_workstation_cluster#update GoogleWorkstationsWorkstationCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkstationsWorkstationClusterConditionsList <a name="GoogleWorkstationsWorkstationClusterConditionsList" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

new googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.get"></a>

```typescript
public get(index: number): GoogleWorkstationsWorkstationClusterConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleWorkstationsWorkstationClusterConditionsOutputReference <a name="GoogleWorkstationsWorkstationClusterConditionsOutputReference" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

new googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.details">details</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions">GoogleWorkstationsWorkstationClusterConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationClusterConditions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions">GoogleWorkstationsWorkstationClusterConditions</a>

---


### GoogleWorkstationsWorkstationClusterDomainConfigOutputReference <a name="GoogleWorkstationsWorkstationClusterDomainConfigOutputReference" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

new googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationClusterDomainConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

---


### GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference <a name="GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

new googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects">resetAllowedProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedProjects` <a name="resetAllowedProjects" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects"></a>

```typescript
public resetAllowedProjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname">clusterHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri">serviceAttachmentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput">allowedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput">enablePrivateEndpointInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects">allowedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterHostname`<sup>Required</sup> <a name="clusterHostname" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname"></a>

```typescript
public readonly clusterHostname: string;
```

- *Type:* string

---

##### `serviceAttachmentUri`<sup>Required</sup> <a name="serviceAttachmentUri" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri"></a>

```typescript
public readonly serviceAttachmentUri: string;
```

- *Type:* string

---

##### `allowedProjectsInput`<sup>Optional</sup> <a name="allowedProjectsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput"></a>

```typescript
public readonly allowedProjectsInput: string[];
```

- *Type:* string[]

---

##### `enablePrivateEndpointInput`<sup>Optional</sup> <a name="enablePrivateEndpointInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput"></a>

```typescript
public readonly enablePrivateEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedProjects`<sup>Required</sup> <a name="allowedProjects" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects"></a>

```typescript
public readonly allowedProjects: string[];
```

- *Type:* string[]

---

##### `enablePrivateEndpoint`<sup>Required</sup> <a name="enablePrivateEndpoint" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint"></a>

```typescript
public readonly enablePrivateEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationClusterPrivateClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

---


### GoogleWorkstationsWorkstationClusterTimeoutsOutputReference <a name="GoogleWorkstationsWorkstationClusterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationCluster } from '@cdktn/provider-google-beta'

new googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkstationsWorkstationClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a>

---



